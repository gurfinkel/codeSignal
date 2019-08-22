#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub evenDigitsOnly {
    my ($n) = @_;
    while ($n) {
        if (($n % 10) & 1) {
            return 0;
        }
        $n = ~~($n / 10);
    }

    return 1;
}
