#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub decipher {
    my ($cipher) = @_;

    my @store = split('', $cipher);
    my $result = '';
    my $c = '';

    foreach (@store) {
        $c .= $_;
        if (97 <= int($c) && 122 >= int($c)) {
            $result .= chr($c);
            $c = '';
        }
    }

    return $result;
}
