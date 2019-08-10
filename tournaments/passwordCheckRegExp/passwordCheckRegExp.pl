#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub passwordCheckRegExp {
    my ($inputString) = @_;

    if (5 > length($inputString)) {
        return 0;
    }

    my $d = 0;
    my $l = 0;
    my $u = 0;
    my @store = split('', $inputString);

    foreach (@store) {
        if ('0' le $_ && '9' ge $_) {
            ++$d;
        } elsif ('a' le $_ && 'z' >= $_) {
            ++$l;
        } elsif ('A' le $_ && 'Z' ge $_) {
            ++$u;
        }
    }

    return $d && $l && $u ? 1 : 0;
}
