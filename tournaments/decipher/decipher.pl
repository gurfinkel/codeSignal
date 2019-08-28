#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub decipher {
    my ($cipher) = @_;

    my @store = split('', $cipher);
    my $result = '';
    my $x = '';

    foreach (@store) {
        $x .= $_;
        if (97 <= int($x) && 122 >= int($x)) {
            $result .= chr($x);
            $x = '';
        }
    }

    return $result;
}
